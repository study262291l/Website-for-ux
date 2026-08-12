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

        "Bankai requirements used to be way harder than now.",

        "Type Soul community was considered one of the most toxic.",

        "There were alligations of one of the creators being a predator.",

        "Type Soul did a re-release of the game three times.",

        "True Mode used to be a thing which overpowered everyone, but got removed afterwards."

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


    function showFact(index) {

        currentFact =
            (index + facts.length) % facts.length;


        factText.textContent =
            facts[currentFact];


        factNumber.textContent =
            String(currentFact + 1).padStart(2, "0");

    }


    nextFact.addEventListener("click", () => {

        showFact(currentFact + 1);

    });


    previousFact.addEventListener("click", () => {

        showFact(currentFact - 1);

    });


    showFact(0);

});