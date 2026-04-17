// QR Modal injection
document.addEventListener('DOMContentLoaded', function() {
    // Create QR modal
    const modal = document.createElement('div');
    modal.id = 'qrModal';
    modal.innerHTML = `
        <div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(10px);" onclick="document.getElementById('qrModal').style.display='none'">
            <div style="text-align:center;" onclick="event.stopPropagation()">
                <div style="font-size:1.5rem;font-weight:800;color:white;margin-bottom:4px;">📲 Scan to Refer</div>
                <div style="font-size:0.85rem;color:#8892a4;margin-bottom:20px;">Anyone who scans this becomes your referral</div>
                <div style="width:220px;height:220px;background:white;border-radius:16px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;padding:12px;">
                    <svg viewBox="0 0 200 200" width="190" height="190">
                        <!-- Simplified QR pattern -->
                        <rect fill="black" x="10" y="10" width="50" height="50" rx="4"/>
                        <rect fill="white" x="18" y="18" width="34" height="34" rx="2"/>
                        <rect fill="black" x="24" y="24" width="22" height="22" rx="2"/>
                        <rect fill="black" x="140" y="10" width="50" height="50" rx="4"/>
                        <rect fill="white" x="148" y="18" width="34" height="34" rx="2"/>
                        <rect fill="black" x="154" y="24" width="22" height="22" rx="2"/>
                        <rect fill="black" x="10" y="140" width="50" height="50" rx="4"/>
                        <rect fill="white" x="18" y="148" width="34" height="34" rx="2"/>
                        <rect fill="black" x="24" y="154" width="22" height="22" rx="2"/>
                        <!-- Data pattern -->
                        <rect fill="black" x="70" y="10" width="10" height="10"/>
                        <rect fill="black" x="90" y="10" width="10" height="10"/>
                        <rect fill="black" x="110" y="10" width="10" height="10"/>
                        <rect fill="black" x="70" y="30" width="10" height="10"/>
                        <rect fill="black" x="100" y="30" width="10" height="10"/>
                        <rect fill="black" x="120" y="30" width="10" height="10"/>
                        <rect fill="black" x="80" y="50" width="10" height="10"/>
                        <rect fill="black" x="110" y="50" width="10" height="10"/>
                        <rect fill="black" x="70" y="70" width="10" height="10"/>
                        <rect fill="black" x="90" y="70" width="10" height="10"/>
                        <rect fill="black" x="110" y="70" width="10" height="10"/>
                        <rect fill="black" x="140" y="70" width="10" height="10"/>
                        <rect fill="black" x="170" y="70" width="10" height="10"/>
                        <rect fill="black" x="10" y="70" width="10" height="10"/>
                        <rect fill="black" x="30" y="70" width="10" height="10"/>
                        <rect fill="black" x="50" y="70" width="10" height="10"/>
                        <rect fill="black" x="80" y="90" width="10" height="10"/>
                        <rect fill="black" x="100" y="90" width="10" height="10"/>
                        <rect fill="black" x="130" y="90" width="10" height="10"/>
                        <rect fill="black" x="160" y="90" width="10" height="10"/>
                        <rect fill="black" x="10" y="90" width="10" height="10"/>
                        <rect fill="black" x="40" y="90" width="10" height="10"/>
                        <rect fill="black" x="70" y="110" width="10" height="10"/>
                        <rect fill="black" x="90" y="110" width="10" height="10"/>
                        <rect fill="black" x="120" y="110" width="10" height="10"/>
                        <rect fill="black" x="150" y="110" width="10" height="10"/>
                        <rect fill="black" x="30" y="110" width="10" height="10"/>
                        <rect fill="black" x="50" y="110" width="10" height="10"/>
                        <rect fill="black" x="80" y="130" width="10" height="10"/>
                        <rect fill="black" x="110" y="130" width="10" height="10"/>
                        <rect fill="black" x="140" y="130" width="10" height="10"/>
                        <rect fill="black" x="70" y="150" width="10" height="10"/>
                        <rect fill="black" x="100" y="150" width="10" height="10"/>
                        <rect fill="black" x="130" y="150" width="10" height="10"/>
                        <rect fill="black" x="160" y="150" width="10" height="10"/>
                        <rect fill="black" x="80" y="170" width="10" height="10"/>
                        <rect fill="black" x="110" y="170" width="10" height="10"/>
                        <rect fill="black" x="140" y="170" width="50" height="50" rx="8" fill-opacity="0"/>
                        <rect fill="black" x="150" y="150" width="10" height="10"/>
                        <rect fill="black" x="180" y="150" width="10" height="10"/>
                        <rect fill="black" x="150" y="180" width="10" height="10"/>
                        <rect fill="black" x="170" y="170" width="10" height="10"/>
                        <!-- P2S center logo -->
                        <rect fill="white" x="75" y="75" width="50" height="50" rx="8"/>
                        <text x="100" y="107" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="22" font-weight="900" fill="#7b2ff7">P2S</text>
                    </svg>
                </div>
                <div style="background:#12121a;border:1px solid #2a2a3a;border-radius:10px;padding:12px;margin-bottom:16px;">
                    <div style="font-size:0.78rem;color:#6b7280;margin-bottom:4px;">Your referral link</div>
                    <div style="font-size:0.88rem;color:#00d4ff;font-weight:600;">paid2say.com/ref/maria_ref</div>
                </div>
                <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:20px;">
                    <div style="padding:10px 18px;background:#1a1a2e;border:1px solid #2a2a3a;border-radius:8px;font-size:0.8rem;color:#8892a4;cursor:pointer;">📱 Text</div>
                    <div style="padding:10px 18px;background:#1a1a2e;border:1px solid #2a2a3a;border-radius:8px;font-size:0.8rem;color:#8892a4;cursor:pointer;">📸 IG</div>
                    <div style="padding:10px 18px;background:#1a1a2e;border:1px solid #2a2a3a;border-radius:8px;font-size:0.8rem;color:#8892a4;cursor:pointer;">📘 FB</div>
                    <div style="padding:10px 18px;background:#1a1a2e;border:1px solid #2a2a3a;border-radius:8px;font-size:0.8rem;color:#8892a4;cursor:pointer;">🔗 Copy</div>
                </div>
                <div style="padding:10px 24px;background:linear-gradient(135deg,#7b2ff7,#5b1fd7);color:white;border-radius:10px;font-weight:700;font-size:0.9rem;cursor:pointer;display:inline-block;" onclick="document.getElementById('qrModal').style.display='none'">Close</div>
            </div>
        </div>
    `;
    modal.style.display = 'none';
    document.body.appendChild(modal);
});

function showQR() {
    document.getElementById('qrModal').style.display = 'block';
}
