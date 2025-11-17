document.getElementById('princessButton').addEventListener('click', function() {
    const message = document.getElementById('celebrationMessage');

    // Buton metnini değiştir (isteğe bağlı)
    this.textContent = 'Şenlendik';
    this.disabled = true;

    // Mesajı göster
    message.classList.remove('hidden');
    // Animasyonu tetiklemek için gecikmeli olarak 'visible' sınıfını ekle
    setTimeout(() => {
        message.classList.add('visible');
    }, 10); // Küçük bir gecikme

    // Basit Konfeti Efekti
    createConfetti();
});

function createConfetti() {
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Konfeti renkleri (pembe tonları ve beyaz)
        const colors = ['#ffc0cb', '#ff69b4', '#ff1493', 'white'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Rastgele konum ve animasyon
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);

        // Konfetiyi bir süre sonra kaldır
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Konfeti için CSS'e eklenmesi gereken stiller (script.js'te tutulamaz, ama burada görselleştirelim)
// *Lütfen bu kısmı `style.css` dosyanıza **ekleyin**.*

/*
.confetti {
    width: 10px;
    height: 10px;
    position: fixed;
    top: -10px;
    opacity: 0;
    transform: rotate(45deg);
    animation: fall 5s linear infinite;
}

@keyframes fall {
    0% {
        transform: translateY(-100px) rotate(45deg) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(1000deg) scale(0.5);
        opacity: 0.5;
    }
}
*/
