// GSAP Text Reveal Animations for Gia Beta Index Page
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Text reveal animation function
export function initTextReveals() {
    // Hero section animations
    const heroTag = document.querySelector(".hero-tag");
    const heroTitle = document.querySelector(".hero h1");
    const heroSub = document.querySelector(".hero-sub");
    const heroActions = document.querySelector(".hero-actions");

    if (heroTag && heroTitle && heroSub && heroActions) {
        // Initial state - hidden
        gsap.set([heroTag, heroTitle, heroSub, heroActions], { 
            autoAlpha: 0, 
            y: 30 
        });

        // Staggered reveal animation
        const heroTL = gsap.timeline({delay: 0.5});
        heroTL
            .to(heroTag, { 
                autoAlpha: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power3.out"
            })
            .to(heroTitle, { 
                autoAlpha: 1, 
                y: 0, 
                duration: 1, 
                ease: "power3.out"
            }, "-=0.3")
            .to(heroSub, { 
                autoAlpha: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power3.out"
            }, "-=0.4")
            .to(heroActions, { 
                autoAlpha: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power3.out"
            }, "-=0.5");
    }

    // Journey panel animations
    const journeyPanels = document.querySelectorAll(".journey-panel");
    journeyPanels.forEach((panel, index) => {
        const stepNumber = panel.querySelector(".step-number");
        const panelTitle = panel.querySelector("h2");
        const panelParagraphs = panel.querySelectorAll("p");
        const detailList = panel.querySelector(".detail-list");

        if (stepNumber && panelTitle) {
            // Set initial state
            gsap.set([stepNumber, panelTitle, panelParagraphs, detailList], { 
                autoAlpha: 0, 
                y: 20
            });

            // Create animation for this panel
            ScrollTrigger.create({
                trigger: panel,
                start: "top 80%",
                once: true,
                onEnter: () => {
                    const tl = gsap.timeline();
                    tl
                        .to(stepNumber, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            ease: "power2.out"
                        })
                        .to(panelTitle, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.8, 
                            ease: "power2.out"
                        }, "-=0.3");

                    // Animate paragraphs
                    if (panelParagraphs.length > 0) {
                        tl.to(panelParagraphs, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            stagger: 0.1, 
                            ease: "power2.out"
                        }, "-=0.4");
                    }

                    // Animate detail list if exists
                    if (detailList) {
                        const listItems = detailList.querySelectorAll("li");
                        tl.to(listItems, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.5, 
                            stagger: 0.1, 
                            ease: "power2.out"
                        }, "-=0.3");
                    }
                }
            });
        }
    });

    // Features section animations
    const featuresHeadline = document.querySelector(".features-headline");
    const featureCards = document.querySelectorAll(".feature-card");

    if (featuresHeadline) {
        gsap.set(featuresHeadline, { autoAlpha: 0, y: 30 });
        
        ScrollTrigger.create({
            trigger: ".features",
            start: "top 80%",
            once: true,
            onEnter: () => {
                gsap.to(featuresHeadline, { 
                    autoAlpha: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: "power3.out"
                });
            }
        });
    }

    featureCards.forEach((card, index) => {
        const cardIcon = card.querySelector(".feature-icon");
        const cardTitle = card.querySelector("h3");
        const cardText = card.querySelector("p");

        if (cardIcon && cardTitle && cardText) {
            gsap.set([cardIcon, cardTitle, cardText], { 
                autoAlpha: 0, 
                y: 20
            });

            ScrollTrigger.create({
                trigger: card,
                start: "top 90%",
                once: true,
                onEnter: () => {
                    const tl = gsap.timeline();
                    tl
                        .to(cardIcon, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.5, 
                            ease: "back.out(1.7)"
                        })
                        .to(cardTitle, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            ease: "power2.out"
                        }, "-=0.3")
                        .to(cardText, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            ease: "power2.out"
                        }, "-=0.4");
                }
            });
        }
    });

    // Quote section animation
    const quoteSection = document.querySelector(".quote-section");
    if (quoteSection) {
        const quoteMark = quoteSection.querySelector(".quote-mark");
        const quoteText = quoteSection.querySelector("blockquote");
        const quoteAttr = quoteSection.querySelector(".quote-attr");

        if (quoteMark && quoteText && quoteAttr) {
            gsap.set([quoteMark, quoteText, quoteAttr], { 
                autoAlpha: 0, 
                y: 20
            });

            ScrollTrigger.create({
                trigger: quoteSection,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    const tl = gsap.timeline();
                    tl
                        .to(quoteMark, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.5, 
                            ease: "power2.out"
                        })
                        .to(quoteText, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.8, 
                            ease: "power2.out"
                        }, "-=0.3")
                        .to(quoteAttr, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            ease: "power2.out"
                        }, "-=0.4");
                }
            });
        }
    }

    // Pricing section animations
    const pricingHeadline = document.querySelector(".pricing .features-headline");
    const pricingCards = document.querySelectorAll(".pricing-card");

    if (pricingHeadline) {
        gsap.set(pricingHeadline, { autoAlpha: 0, y: 30 });
        
        ScrollTrigger.create({
            trigger: ".pricing",
            start: "top 80%",
            once: true,
            onEnter: () => {
                gsap.to(pricingHeadline, { 
                    autoAlpha: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: "power3.out"
                });
            }
        });
    }

    pricingCards.forEach((card, index) => {
        const cardTitle = card.querySelector("h3");
        const cardPrice = card.querySelector(".price");
        const cardFeatures = card.querySelector(".pricing-features");
        const cardButton = card.querySelector("a");

        if (cardTitle && cardPrice) {
            gsap.set([cardTitle, cardPrice, cardFeatures, cardButton], { 
                autoAlpha: 0, 
                y: 20
            });

            ScrollTrigger.create({
                trigger: card,
                start: "top 90%",
                once: true,
                onEnter: () => {
                    const tl = gsap.timeline();
                    tl
                        .to(cardTitle, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            ease: "power2.out"
                        })
                        .to(cardPrice, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            ease: "power2.out"
                        }, "-=0.3");

                    if (cardFeatures) {
                        const features = cardFeatures.querySelectorAll("li");
                        tl.to(features, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.5, 
                            stagger: 0.1, 
                            ease: "power2.out"
                        }, "-=0.3");
                    }

                    if (cardButton) {
                        tl.to(cardButton, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            ease: "power2.out"
                        }, "-=0.5");
                    }
                }
            });
        }
    });

    // Final CTA animation
    const finalCTA = document.querySelector(".final-cta");
    if (finalCTA) {
        const jordaneAvatar = finalCTA.querySelector(".jordane-avatar");
        const finalTitle = finalCTA.querySelector("h2");
        const finalText = finalCTA.querySelector("p");
        const finalButton = finalCTA.querySelector(".btn-cta-large");

        if (jordaneAvatar && finalTitle && finalText && finalButton) {
            gsap.set([jordaneAvatar, finalTitle, finalText, finalButton], { 
                autoAlpha: 0, 
                y: 30
            });

            ScrollTrigger.create({
                trigger: finalCTA,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    const tl = gsap.timeline();
                    tl
                        .to(jordaneAvatar, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            ease: "back.out(1.7)"
                        })
                        .to(finalTitle, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.8, 
                            ease: "power3.out"
                        }, "-=0.3")
                        .to(finalText, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.6, 
                            ease: "power2.out"
                        }, "-=0.4")
                        .to(finalButton, { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.8, 
                            ease: "power3.out"
                        }, "-=0.5");
                }
            });
        }
    });
}

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    initTextReveals();
});