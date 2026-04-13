/**
 * AI Card Section - Swiper Initialization
 */

document.addEventListener('DOMContentLoaded', function() {
    // Swiper 초기화
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        initialSlide: 0,
        speed: 800,
        cardsEffect: {
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8,
        },
    });

    /**
     * Hero Section - Tab Click Functionality
     */
    const tabData = [
        {
            title: "발음부터 자신감까지",
            desc: "직접 말하며 발음과 억양을 연습해 보세요.<br>반복 연습을 통해 자연스럽고<br>자신감 있는 말하기가 가능합니다!",
            image: "assets/images/Tabs_1.png"
        },
        {
            title: "AI 대화 시뮬레이션",
            desc: "AI 캐릭터와 대화하며 실제 상황처럼 영어 회화를 연습해 보세요. <br>부담 없이 말하다 보면 자연스럽게 표현이 늘어납니다.",
            image: "assets/images/Tabs_2.png"
        },
        {
            title: "게임하듯 쉽고 재밌게",
            desc: "게임처럼 퀴즈를 풀며 자연스럽게 영단어를 익혀보세요. <br> 단어의 정확한 의미를 알려주고 쉽게 이해할 수 있도록 도와줍니다.",
            image: "assets/images/Tabs_3.png"
        },
        {
            title: "성장하는 영어 실력 확인",
            desc: "학습 기록과 성취도를 한눈에 확인하며<br>자신의 영어 실력 변화를 확인할 수 있습니다. ",
            image: "assets/images/Tabs_4.png"
        }
    ];

    const tabs = document.querySelectorAll('.hero .tab');
    const mainImage = document.getElementById('mainImage');
    const titleElement = document.getElementById('title');
    const descElement = document.getElementById('desc');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // 모든 탭에서 active 클래스 제거
            tabs.forEach(t => t.classList.remove('active'));

            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');

            // 해당 탭의 데이터로 콘텐츠 업데이트
            const data = tabData[index];
            mainImage.src = data.image;
            titleElement.textContent = data.title;
            descElement.innerHTML = data.desc;
        });
    });
});
