import React from "react";

export default function Experience() {

    const experienceStations = [
        {
            id: 0,
            duration: "Jul. 2023 - Aug. 2023",
            title: "React JavaScript Libraries",
            subtitle: "alfatraining",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        },
        {
            id: 0,
            duration: "Oct. 2022 - Jan. 2023",
            title: "Digital Media Management",
            subtitle: "karriere tutor",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        },
        {
            id: 0,
            duration: "Aug. 2022 - Oct. 2022",
            title: "Webdesign with WordPress",
            subtitle: "karriere tutor",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        }
    ];

    function ShowExperienceItem(currentExperience) {
        return (
            <div key={currentExperience.id} className="experience-item">
                <div className="experience-item-left">
                    <h4>{currentExperience.duration}</h4>
                </div>
                <div className="experience-item-right">
                    <h3>{currentExperience.title}</h3>
                    <h4>{currentExperience.subtitle}</h4>
                    <p>{currentExperience.description}</p>
                </div>
            </div>
        );
    }

    function ShowExperience() {
        return (
            <div className="current-experience">
                {experienceStations.map(currentExperience => ShowExperienceItem(currentExperience))}
            </div>
        );
    }

    function ExperienceSection() {
        return (
            <div className="experience-section">
                <h2>Experience</h2>
                <ShowExperience />
            </div>
        );
    }

    return (
        <div className="experience">
            <ExperienceSection />
        </div>
    );
}