import './style.css';
// @ts-ignore
function typeTextOnScroll(element: HTMLElement, text: string) {
    element.style.position = 'relative';
    const spacer = document.createElement('div');
    spacer.innerText = text;
    spacer.style.userSelect = 'none';
    spacer.style.opacity = '0';

    const textElement = document.createElement('div');
    textElement.style.position = 'absolute';
    textElement.style.top = '0';
    textElement.style.left = '0';
    textElement.style.width = '100%';
    textElement.style.height = '100%';

    element.appendChild(spacer);
    element.appendChild(textElement);

    document.addEventListener('scroll', () => {
        const visiblePart = -element.getBoundingClientRect().top + window.innerHeight;

        let percentage = visiblePart / element.offsetHeight;

        if (percentage < 0) {
            percentage = 0;
        }

        if (percentage > 1) {
            percentage = 1;
        }

        const slicedText = text.slice(0, Math.floor(text.length * percentage));

        textElement.innerHTML = slicedText;
    });
}
// @ts-ignore
function showElementOnScroll(element: HTMLElement) {
    const visiblePart = window.innerHeight - element.offsetTop + window.scrollY;
    console.log(visiblePart);
    let percentage = visiblePart / 200;

    if (percentage < 0) {
        percentage = 0;
    }

    if (percentage > 1) {
        percentage = 1;
    }

    const minOpacity = 0;
    const maxOpacity = 1;

    const currentOpacity = minOpacity + (maxOpacity - minOpacity) * percentage;

    requestAnimationFrame(() => {
        element.style.opacity = currentOpacity.toString();
    });
}
// @ts-ignore
function animateOnScroll(
    element: HTMLElement,
    from: number,
    to: number,
    getStyleByPercentage: (percentage: number) => Record<string, any>
) {
    const visiblePart = window.scrollY - from;
    let percentage = visiblePart / to;
    // console.log(visiblePart, percentage);
    if (percentage < 0) {
        percentage = 0;
    }

    if (percentage > 1) {
        percentage = 1;
    }

    const styles = getStyleByPercentage(percentage);

    requestAnimationFrame(() => {
        Object.entries(styles).forEach(([key, value]) => {
            element.style[key as any] = value;
        });
    });
}

function animateOnAppear(
    element: HTMLElement,
    getStyleByPercentage: (percentage: number) => Record<string, any>
) {
    const visiblePart = -element.getBoundingClientRect().top + window.innerHeight;

    let percentage = visiblePart / element.offsetHeight;

    if (percentage < 0) {
        percentage = 0;
    }

    if (percentage > 1) {
        percentage = 1;
    }

    const styles = getStyleByPercentage(percentage);

    requestAnimationFrame(() => {
        Object.entries(styles).forEach(([key, value]) => {
            element.style[key as any] = value;
        });
    });
}
const projectsBlocks = document.querySelectorAll('.projects__block');
const projectsBlocksTails = document.querySelectorAll('.projects__block .tail');

document.addEventListener('scroll', () => {
    projectsBlocks.forEach((block, index) => {
        animateOnAppear(block as HTMLElement, (percentage) => {
            const opacity = percentage < 0.5 ? 0 : 1;

            const isMobile = window.innerWidth < 768;
            const mobileTransform = `translateY(${percentage < 0.5 ? '1.5em' : 0})`;
            const desktopTransform =
                index % 2 === 0
                    ? `translateX(${percentage < 0.5 ? '1.5em' : 0})`
                    : `translateX(-${percentage < 0.5 ? '1.5em' : 0})`;

            (projectsBlocksTails[index] as HTMLElement).style.width =
                percentage < 0.5 ? '0' : '1.5em';

            return {
                transform: isMobile ? mobileTransform : desktopTransform,
                opacity: opacity,
            };
        });
    });
});

// const element = document.getElementById('hello')!;
// const element2 = document.getElementById('hello2')!;

// typeTextOnScroll(element, aboutMeText);

// document.addEventListener('scroll', () => {
//     animateOnScroll(element, 0, 4000, (percentage) => {
//         let scale = 1;
//         if (percentage > 0.05) {
//             scale = 1 - scale * (percentage - 0.05);
//         }

//         // let rotate = 0;
//         // if (percentage > 0.05) {
//         //     rotate = 360 * (percentage - 0.05);
//         // }

//         let opacity = 1;
//         if (percentage > 0.5) {
//             opacity = 1 - (percentage - 0.5) * 2;
//         }

//         return {
//             transform: `scale(${scale})`,
//             filter: `blur(${blur}px)`,
//             opacity,
//             visibility: percentage === 1 ? 'hidden' : 'visible',
//         };
//     });

//     animateOnScroll(element2, 4000, 4000, (percentage) => {
//         console.log(percentage);
//         let scale = 0 + 1 * percentage;

//         let opacity = 0 + 1 * percentage;

//         return {
//             transform: `scale(${scale})`,
//             opacity,
//             visibility: percentage === 0 ? 'hidden' : 'visible',
//         };
//     });
// });
