document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       TIMELINE
    ====================================================== */

    const timelineItems =
        document.querySelectorAll(".timelineItem");

    const timelineYear =
        document.getElementById("timelineYear");

    const timelineTitle =
        document.getElementById("timelineTitle");

    const timelineDescription =
        document.getElementById("timelineDescription");


    const timelineData = {

        "2023": {

            title: "THE BEGINNING",

            description:
                "Add verified information about Type Soul's early release and the features that were available during this period."

        },


        "2024": {

            title: "MAJOR CHANGES",

            description:
                "Add information about important updates, mechanics, races, locations or other changes introduced during this period."

        },


        "2025": {

            title: "A NEW ERA",

            description:
                "Add information about major developments that changed how Type Soul was played during this period."

        },


        "2026": {

            title: "TODAY",

            description:
                "Add information about the current state of Type Soul and how the game has evolved from its earlier versions."

        }

    };


    timelineItems.forEach((item) => {

        item.addEventListener("click", () => {

            const year =
                item.dataset.year;


            const data =
                timelineData[year];


            if (!data) return;


            timelineItems.forEach((timeline) => {

                timeline.classList.remove("active");

            });


            item.classList.add("active");


            timelineYear.textContent =
                year;


            timelineTitle.textContent =
                data.title;


            timelineDescription.textContent =
                data.description;

        });

    });



    /* =====================================================
       DID YOU KNOW?
    ====================================================== */

    const facts = [

        {
            short:
                "Bankai requirements used to be way harder than now.",

            title:
                "BANKAI USED TO BE MUCH HARDER",

            details:
                "In earlier versions of Type Soul, obtaining Bankai required players to go through a much more demanding progression process. The requirements and overall process were later changed, making Bankai more accessible compared with the older system."
        },


        {
            short:
                "The Type Soul community was considered one of the most toxic.",

            title:
                "THE COMMUNITY'S REPUTATION",

            details:
                "Type Soul developed a reputation for having a very competitive and sometimes hostile community. PvP, progression and the game's competitive nature contributed to many players having strong opinions about the community."
        },


        {
            short:
                "There were allegations involving one of the creators.",

            title:
                "CONTROVERSY SURROUNDING THE GAME",

            details:
                "At different points in Type Soul's history, allegations and controversy surrounding people involved with the game circulated within the community. These claims should be treated as allegations rather than established facts unless supported by reliable evidence."
        },


        {
            short:
                "Type Soul had multiple re-releases.",

            title:
                "THE GAME WAS RE-RELEASED",

            details:
                "Type Soul went through multiple major releases and resets during its development. These re-releases changed parts of the game and gave players different versions of the experience as the developers continued to work on it."
        },


        {
            short:
                "True Mode used to be a thing which overpowered everyone, but was removed afterwards.",

            title:
                "THE ERA OF TRUE MODE",

            details:
                "True Mode was an older feature that became known for giving players a significant amount of power. Its strength made it stand out from normal gameplay, and the feature was eventually removed."
        }

    ];


    let currentFact = 0;


    const factText =
        document.getElementById("factText");

    const factNumber =
        document.getElementById("factNumber");

    const previousFact =
        document.getElementById("previousFact");

    const nextFact =
        document.getElementById("nextFact");


    /* =====================================================
       SHOW FACT
    ====================================================== */

    function showFact(index) {

        currentFact =
            (index + facts.length) % facts.length;


        const fact =
            facts[currentFact];


        factText.textContent =
            fact.short;


        factNumber.textContent =
            String(currentFact + 1).padStart(2, "0");

    }


    /* =====================================================
       NEXT FACT
    ====================================================== */

    nextFact.addEventListener("click", () => {

        showFact(currentFact + 1);

    });


    /* =====================================================
       PREVIOUS FACT
    ====================================================== */

    previousFact.addEventListener("click", () => {

        showFact(currentFact - 1);

    });



    /* =====================================================
       FACT DETAILS POPUP
    ====================================================== */

    const factInfoButton =
        document.getElementById("factInfoButton");

    const factModal =
        document.getElementById("factModal");

    const factModalBackdrop =
        document.getElementById("factModalBackdrop");

    const factModalClose =
        document.getElementById("factModalClose");

    const factModalNumber =
        document.getElementById("factModalNumber");

    const factModalTitle =
        document.getElementById("factModalTitle");

    const factModalText =
        document.getElementById("factModalText");



    /* =====================================================
       OPEN POPUP
    ====================================================== */

    function openFactModal() {

        const fact =
            facts[currentFact];


        factModalNumber.textContent =
            "FACT " +
            String(currentFact + 1).padStart(2, "0");


        factModalTitle.textContent =
            fact.title;


        factModalText.textContent =
            fact.details;


        factModal.classList.add("show");


        factModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }



    /* =====================================================
       CLOSE POPUP
    ====================================================== */

    function closeFactModal() {

        factModal.classList.remove("show");


        factModal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }



    /* =====================================================
       LIGHTBULB BUTTON
    ====================================================== */

    if (factInfoButton) {

        factInfoButton.addEventListener(
            "click",
            openFactModal
        );

    }



    /* =====================================================
       CLOSE BUTTON
    ====================================================== */

    if (factModalClose) {

        factModalClose.addEventListener(
            "click",
            closeFactModal
        );

    }



    /* =====================================================
       CLICK OUTSIDE POPUP
    ====================================================== */

    if (factModalBackdrop) {

        factModalBackdrop.addEventListener(
            "click",
            closeFactModal
        );

    }



    /* =====================================================
       ESC KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                factModal &&
                factModal.classList.contains("show")
            ) {

                closeFactModal();

            }

        }
    );



    /* =====================================================
       INITIAL FACT
    ====================================================== */

    showFact(0);

});
