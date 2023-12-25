function show(n) {
    let current = n;

    const intervalId = setInterval(() => {
        console.log(current);

        if (current * 2 <= 1000) {
            current *= 2;
        } else {
            console.log('end');
            clearInterval(intervalId);
        }
    }, 1000);
}

// ทดสอบ
show(1);
// ผลลัพธ์: 1 2 4 8 16 32 64 128 256 512 1024 end

show(8);
// ผลลัพธ์: 8 16 32 64 128 256 512 1024 end

show(30);
// ผลลัพธ์: 30 60 120 240 480 960 1920 end
