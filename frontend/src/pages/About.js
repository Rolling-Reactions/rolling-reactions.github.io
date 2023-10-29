import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col h-fit w-full items-center"
    >
      <p className="text-6xl w-4/5 my-3">About the project</p>
      <div className="flex flex-col h-3/6 w-full justify-center items-center">
        <p className="text-4xl font-extrabold w-4/5">Goals</p>
        <div className="flex flex-col justify-center md:flex-row">
          <div className="h-3/5 w-full md:w-2/5 px-8">
            <p className="text-xl font-extrabold">Developers: </p> A challenge
            in developing advanced interactions (between virtual hands and lab
            equipment, steering wheelchair) and advanced graphics (vials, glass,
            fluids, mixing substances, fire/explosion, smoke, boiling)
            <p className="text-xl font-extrabold ">Players: </p> A laboratory
            simulator where you get a first person experience of lab work. You
            may get to pick from a number of different substances and machines,
            and see what the true to life result will be. You can choose to
            follow instructions on actual laborations, like extracting caffeine
            from tea, or if you prefer just mess around and accidentally set the
            lab on fire with the sodium+water reaction.
          </div>
          <div className="h-3/5 w-full md:w-2/5  px-8 ">
            <p className="text-xl font-extrabold">For society: </p>
            General education of what it is like to work in a lab, packaged as a
            fun sandbox game. The lack of insight into research environments,
            like laboratories, might make research seem less like actual science
            and more like something that is agreed upon by a select elite. This
            could lead to a lack of trust for the scientific community. By
            presenting a somewhat true to life simulation of a laboratory, the
            users can experience and explore the lab by themselves, and even
            engage in dangerous experiments in a safe way.
          </div>
        </div>
        <div className="w-4/5 my-5">
        <p className="text-4xl font-extrabold w-4/5">Challenges</p>
        <div className="h-3/6  flex  flex-col justify-around md:flex-row">
          <div className="w-full  md:w-3/6 ">
            One of the most challenging things has been making the wheelchair
            behave in a believable and intuitive way. Achieving this goal has
            taken countless hours. Then also avoiding making players cyber sick
            while using the wheelchair in VR has added another layer of
            challenge. While developing the wheelchair simulation, the initial
            approach was to use Unity's inbuilt WheelColliders. However, this
            did not work very well as they did not react realistically to
            pushing the wheelchair, and turning was often slow. The final system
            we settled on used HingeJoints for the wheels, as well as applying
            spring forces to the caster wheels to improve turning. A lot of time
            was spent on fine tuning parameters and testing the system to
            finally achieve a quite realistic simulation of a wheelchair.
          </div>
          <div div className="w-full mt-4  md:w-2/6 md:mt-0">
            VR interaction was a big challenge. For the wheelchair we had to
            create a custom interaction system, which involved learning about VR
            input as well as mapping it to a physically realistic wheelchair
            controller. At the start of the project we used SteamVR for
            interaction, but we realised that it did not play well with Zibra
            Effects and frequently crashed. Therefore we had to migrate to the
            Unity XR Toolkit very late in the project, which added to the
            challenge as we had to learn a completely new interaction system.
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;