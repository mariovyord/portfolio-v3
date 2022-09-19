import { TSkill } from "../../types/types"
import Indicator from "./indicator"



const SkillCard: React.FC<{ skill: TSkill, classes: string, indicator: boolean }> = ({ skill, classes, indicator }) => {
    return (
        <div className={`${classes} border-2 p-4 h-fit w-fit rounded-md hover:scale-125 hover:-rotate-6 bg-base transition-all relative`}>
            {indicator && <Indicator />}
            {skill.skillName}
        </div>
    )
}

export default SkillCard