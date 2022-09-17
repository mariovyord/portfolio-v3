import { TSkill } from "../../types/types"

const SkillCard: React.FC<{ skill: TSkill, classes: string }> = ({ skill, classes }) => {
    return (
        <div className={`${classes} border-2 p-4 h-fit w-fit rounded-md hover:scale-125 bg-base transition-all`}>
            {skill.skillName}
        </div>
    )
}

export default SkillCard