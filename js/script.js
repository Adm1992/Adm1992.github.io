// 导航链接点击提示
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        alert(`即将跳转到：${this.querySelector('span').textContent}`);
        window.location.href = this.href;
    });
});

// 头像点击跳转到腾讯QQ客服
document.querySelector('.about img').addEventListener('click', function () {
    window.open('https://wpa.qq.com/msgrd?v=3&uin=137803669&site=qq&menu=yes', '_blank');
});

// 微信二维码弹窗
document.querySelector('.social-media a[href="#wechat"]').addEventListener('click', function (e) {
    e.preventDefault();
    const qrcode = document.createElement('div');
    qrcode.style.position = 'fixed';
    qrcode.style.top = '50%';
    qrcode.style.left = '50%';
    qrcode.style.transform = 'translate(-50%, -50%)';
    qrcode.style.backgroundColor = '#fff';
    qrcode.style.padding = '20px';
    qrcode.style.borderRadius = '10px';
    qrcode.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    qrcode.innerHTML = `
        <img src="images/ziji.png" alt="微信二维码" style="width: 150px; height: 150px;">
        <p style="text-align: center; color: #000; margin-top: 10px;">扫码添加微信</p>
    `;
    document.body.appendChild(qrcode);

    // 点击外部关闭弹窗
    qrcode.addEventListener('click', function () {
        document.body.removeChild(qrcode);
    });
});