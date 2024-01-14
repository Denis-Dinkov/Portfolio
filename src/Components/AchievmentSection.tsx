import AnimatedNumbers from "react-animated-numbers";

const achievementsList = [
  {
    metric: "Projects",
    value: 100,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 100.0,
  },
  {
    metric: "Awards",
    value: 7,
  },
  {
    metric: "Years",
    value: 5,
  },
];

export default function AchievmentSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-6">
      <div className="border-[#33353F] border rounded-mb py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="flex flex-col justify-center mx-4">
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => {
                  return {
                    mass: 1,
                    friction: 100,
                    tension: 140 * (index + 1),
                  };
                }}
                
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
