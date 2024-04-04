    /* 
    ========================================
        Rotating Images Section
    ========================================
    */

    // Array of image paths
    const imagePaths = [
          "https://res.cloudinary.com/dpiqcmkyo/image/upload/v1690659768/MD_webportfolio_39_g8oxv5.jpg",
          "https://res.cloudinary.com/dpiqcmkyo/image/upload/v1690659767/MD_webportfolio_38_ed9ktc.jpg",
          "https://res.cloudinary.com/dpiqcmkyo/image/upload/v1690659767/MD_webportfolio_37_utn3xm.jpg",
          "https://res.cloudinary.com/dpiqcmkyo/image/upload/v1690659767/MD_webportfolio_34_clul3w.jpg",
          "https://res.cloudinary.com/dpiqcmkyo/image/upload/v1690683803/MD_webportfolio_41_tmquio.jpg",
          "https://res.cloudinary.com/dpiqcmkyo/image/upload/v1690736328/MD_webportfolio_45_twnguu.jpg"
        ];
    
    // needed attributes
    let num = 0;
    let play = true;

    // Banner holder for the image switching
    const mainBannerHolder = document.querySelector(".main-banner-holder");

    const switchMainBannerImages = () => {
        const mainBannerHolderFirst = mainBannerHolder.querySelector('.first-image');
        const secondBannerHolderSecond = mainBannerHolder.querySelector('.second-image');
        
        if(secondBannerHolderSecond.style.opacity == "0") {
            secondBannerHolderSecond.style = "opacity: 1";
            setTimeout(() => {
                mainBannerHolderFirst.src = imagePaths[num];
            }, 300);
            num++;
        } else {
            secondBannerHolderSecond.style = "opacity: 0";
            setTimeout(() => {
                secondBannerHolderSecond.src = imagePaths[num];
            }, 300);
            num++;
        }

        if(num == imagePaths.length) {
            num = 0;
        }
    }
    // Interval Function
    setInterval(() => {
        switchMainBannerImages();
    }, 8000);

