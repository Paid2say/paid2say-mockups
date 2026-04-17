// Double-tap Profile icon to switch roles
let lastProfileTap = 0;
let profileTapTimer = null;

function handleProfileTap(e) {
    e.preventDefault();
    const now = Date.now();
    
    if (now - lastProfileTap < 400) {
        // DOUBLE TAP — switch roles
        clearTimeout(profileTapTimer);
        showRoleSwitchToast();
        lastProfileTap = 0;
    } else {
        // First tap — wait to see if double
        lastProfileTap = now;
        profileTapTimer = setTimeout(() => {
            // Single tap — go to profile
            window.location.href = 'affiliate-profile.html';
            lastProfileTap = 0;
        }, 400);
    }
}

function showRoleSwitchToast() {
    // Remove existing toast
    const existing = document.getElementById('roleSwitchToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'roleSwitchToast';
    toast.innerHTML = `
        <div style="position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:10000;
            background:#12121a;border:1px solid #2a2a3a;border-radius:16px;padding:16px 20px;
            width:calc(100% - 40px);max-width:360px;box-shadow:0 8px 32px rgba(0,0,0,0.5);
            animation:slideUp 0.3s ease;">
            <div style="font-size:0.85rem;font-weight:700;margin-bottom:12px;text-align:center;">🔄 Switch Role</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
                <div onclick="window.location.href='affiliate-dashboard.html'" style="display:flex;align-items:center;gap:12px;padding:12px;background:#0d1b2a;border:1px solid #00d4ff44;border-radius:10px;cursor:pointer;">
                    <div style="font-size:1.2rem;">👤</div>
                    <div style="flex:1;">
                        <div style="font-size:0.82rem;font-weight:600;color:#00d4ff;">Affiliate Mode</div>
                        <div style="font-size:0.68rem;color:#6b7280;">@maria_ref · $847 balance</div>
                    </div>
                    <div style="font-size:0.7rem;color:#22c55e;">✓</div>
                </div>
                <div onclick="window.location.href='business-wallet.html'" style="display:flex;align-items:center;gap:12px;padding:12px;background:#1a1a2e;border:1px solid #2a2a3a;border-radius:10px;cursor:pointer;">
                    <div style="font-size:1.2rem;">☕</div>
                    <div style="flex:1;">
                        <div style="font-size:0.82rem;font-weight:600;">Maria's Coffee Bar</div>
                        <div style="font-size:0.68rem;color:#6b7280;">Business · $1,247 wallet</div>
                    </div>
                    <div style="font-size:0.7rem;color:#6b7280;">Switch →</div>
                </div>
            </div>
            <div onclick="document.getElementById('roleSwitchToast').remove()" style="text-align:center;margin-top:10px;font-size:0.78rem;color:#6b7280;cursor:pointer;">Cancel</div>
        </div>
    `;
    document.body.appendChild(toast);

    // Auto-dismiss after 5 seconds
    setTimeout(() => { 
        const t = document.getElementById('roleSwitchToast');
        if (t) t.remove();
    }, 5000);
}

// Add animation style
const style = document.createElement('style');
style.textContent = '@keyframes slideUp { from { transform: translateX(-50%) translateY(20px); opacity: 0; } to { transform: translateX(-50%) translateY(0); opacity: 1; } }';
document.head.appendChild(style);
