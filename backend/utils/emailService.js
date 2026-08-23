import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL || 'orders@kraftstudio.in';
const STORE_NAME = 'Kraft Studio';

/**
 * Send order confirmation email to customer
 */
export const sendOrderConfirmationEmail = async ({ toEmail, toName, orderId, items, amount, address, paymentMethod }) => {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.log('[Email] RESEND_API_KEY not set — skipping email');
            return;
        }

        const itemsHtml = items.map(item => `
            <tr>
                <td style="padding:10px 0;border-bottom:1px solid #E8E2DC;">
                    <strong style="font-size:14px;color:#2C2523;">${item.name}</strong>
                    ${item.size && item.size !== 'Default' ? `<span style="color:#888;font-size:12px;"> — ${item.size}</span>` : ''}
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #E8E2DC;text-align:center;color:#555;">${item.quantity}</td>
                <td style="padding:10px 0;border-bottom:1px solid #E8E2DC;text-align:right;color:#2C2523;font-weight:600;">₹${Number(item.price * item.quantity).toFixed(2)}</td>
            </tr>
        `).join('');

        const html = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="margin:0;padding:0;background:#FAF6F0;font-family:'Georgia',serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6F0;padding:40px 20px;">
                <tr><td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #E8E2DC;max-width:600px;width:100%;">
                        
                        <!-- Header -->
                        <tr>
                            <td style="background:#43281C;padding:32px 40px;text-align:center;">
                                <h1 style="margin:0;color:#FAF6F0;font-size:28px;font-weight:normal;letter-spacing:2px;">✂ ${STORE_NAME}</h1>
                                <p style="margin:6px 0 0;color:#E6C594;font-size:13px;letter-spacing:1px;">HANDCRAFTED WITH LOVE</p>
                            </td>
                        </tr>

                        <!-- Body -->
                        <tr>
                            <td style="padding:40px;">
                                <h2 style="margin:0 0 8px;color:#2C2523;font-size:22px;font-weight:normal;">Thank you, ${toName}! 🎉</h2>
                                <p style="margin:0 0 24px;color:#666;font-size:14px;line-height:1.6;">Your order has been placed and our artisans are getting to work. You'll receive shipping updates soon.</p>

                                <div style="background:#FAF6F0;border:1px solid #E8E2DC;padding:16px 20px;margin-bottom:28px;border-radius:2px;">
                                    <p style="margin:0;font-size:12px;color:#888;letter-spacing:1px;text-transform:uppercase;">Order Reference</p>
                                    <p style="margin:4px 0 0;font-size:16px;color:#43281C;font-weight:bold;font-family:monospace;">#${orderId.toString().slice(-8).toUpperCase()}</p>
                                </div>

                                <!-- Items -->
                                <table width="100%" cellpadding="0" cellspacing="0" style="border-top:2px solid #43281C;margin-bottom:20px;">
                                    <tr>
                                        <th style="padding:10px 0;text-align:left;font-size:11px;color:#888;letter-spacing:1px;text-transform:uppercase;font-weight:normal;">Item</th>
                                        <th style="padding:10px 0;text-align:center;font-size:11px;color:#888;letter-spacing:1px;text-transform:uppercase;font-weight:normal;">Qty</th>
                                        <th style="padding:10px 0;text-align:right;font-size:11px;color:#888;letter-spacing:1px;text-transform:uppercase;font-weight:normal;">Total</th>
                                    </tr>
                                    ${itemsHtml}
                                    <tr>
                                        <td colspan="2" style="padding:14px 0 0;font-size:15px;font-weight:bold;color:#2C2523;">Total Paid</td>
                                        <td style="padding:14px 0 0;text-align:right;font-size:17px;font-weight:bold;color:#43281C;">₹${Number(amount).toFixed(2)}</td>
                                    </tr>
                                </table>

                                <!-- Delivery & Payment -->
                                <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #E8E2DC;padding-top:20px;margin-top:4px;">
                                    <tr>
                                        <td width="50%" style="padding-top:16px;vertical-align:top;">
                                            <p style="margin:0;font-size:11px;color:#888;letter-spacing:1px;text-transform:uppercase;">Deliver To</p>
                                            <p style="margin:6px 0 0;font-size:13px;color:#2C2523;line-height:1.6;">
                                                ${address.firstName} ${address.lastName}<br>
                                                ${address.street}<br>
                                                ${address.city}, ${address.state} ${address.zipcode}<br>
                                                ${address.country}
                                            </p>
                                        </td>
                                        <td width="50%" style="padding-top:16px;vertical-align:top;text-align:right;">
                                            <p style="margin:0;font-size:11px;color:#888;letter-spacing:1px;text-transform:uppercase;">Payment</p>
                                            <p style="margin:6px 0 0;font-size:13px;color:#2C2523;">${paymentMethod}</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="background:#FAF6F0;border-top:1px solid #E8E2DC;padding:24px 40px;text-align:center;">
                                <p style="margin:0;font-size:12px;color:#888;line-height:1.7;">Questions? Reply to this email or visit<br>
                                <a href="${process.env.CLIENT_URL || 'http://localhost:5173'}" style="color:#43281C;">kraftstudio.in</a></p>
                                <p style="margin:12px 0 0;font-size:11px;color:#bbb;">© 2025 Kraft Studio. Handcrafted in India.</p>
                            </td>
                        </tr>
                    </table>
                </td></tr>
            </table>
        </body>
        </html>`;

        const result = await resend.emails.send({
            from: FROM_EMAIL,
            to: toEmail,
            subject: `Order Confirmed — Kraft Studio #${orderId.toString().slice(-8).toUpperCase()}`,
            html,
        });

        console.log(`[Email] Confirmation sent to ${toEmail}`, result?.id);
        return result;
    } catch (err) {
        // Non-fatal — log but don't throw so the order still goes through
        console.error('[Email] Failed to send confirmation:', err.message);
    }
};

/**
 * Send shipping / status update email to customer
 */
export const sendStatusUpdateEmail = async ({ toEmail, toName, orderId, status }) => {
    try {
        if (!process.env.RESEND_API_KEY) return;

        const statusMessages = {
            'Order Placed':  { emoji: '✅', msg: 'Your order has been received and is being prepared.' },
            'Packing':       { emoji: '📦', msg: 'Our artisans are carefully packing your order.' },
            'Shipped':       { emoji: '🚚', msg: 'Your order is on its way! Track it with your courier.' },
            'Out for delivery': { emoji: '🏠', msg: 'Your package is out for delivery today!' },
            'Delivered':     { emoji: '🎉', msg: 'Your order has been delivered. Enjoy your handcrafted piece!' },
        };

        const info = statusMessages[status] || { emoji: '📋', msg: `Your order status has been updated to: ${status}` };

        const html = `
        <!DOCTYPE html><html><body style="margin:0;padding:0;background:#FAF6F0;font-family:'Georgia',serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6F0;padding:40px 20px;"><tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #E8E2DC;max-width:600px;width:100%;">
                <tr><td style="background:#43281C;padding:28px 40px;text-align:center;">
                    <h1 style="margin:0;color:#FAF6F0;font-size:26px;font-weight:normal;letter-spacing:2px;">✂ ${STORE_NAME}</h1>
                </td></tr>
                <tr><td style="padding:40px;text-align:center;">
                    <div style="font-size:48px;margin-bottom:16px;">${info.emoji}</div>
                    <h2 style="margin:0 0 12px;color:#2C2523;font-size:22px;font-weight:normal;">Order Update</h2>
                    <div style="display:inline-block;background:#FAF6F0;border:1px solid #E8E2DC;padding:8px 20px;border-radius:2px;margin-bottom:20px;">
                        <strong style="color:#43281C;letter-spacing:1px;font-size:13px;">${status.toUpperCase()}</strong>
                    </div>
                    <p style="color:#666;font-size:14px;line-height:1.6;margin:0 0 24px;">${info.msg}</p>
                    <p style="color:#888;font-size:12px;margin:0;">Order <span style="font-family:monospace;color:#43281C;">#${orderId.toString().slice(-8).toUpperCase()}</span></p>
                </td></tr>
                <tr><td style="background:#FAF6F0;border-top:1px solid #E8E2DC;padding:20px 40px;text-align:center;">
                    <p style="margin:0;font-size:11px;color:#bbb;">© 2025 Kraft Studio. Handcrafted in India.</p>
                </td></tr>
            </table>
            </td></tr></table>
        </body></html>`;

        await resend.emails.send({
            from: FROM_EMAIL,
            to: toEmail,
            subject: `${info.emoji} Order Update — ${status} | Kraft Studio`,
            html,
        });

        console.log(`[Email] Status update sent to ${toEmail}: ${status}`);
    } catch (err) {
        console.error('[Email] Failed to send status update:', err.message);
    }
};
