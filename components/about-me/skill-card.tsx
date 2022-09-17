import { TSkill } from "../../types/types"

const SkillCard: React.FC<{ skill: TSkill }> = ({ skill }) => {
    return (
        <div className="border-2 border-primary p-4 w-fit rounded-md hover:scale-125 bg-base transition-all">
            {skill.skillName}
        </div>
    )
}

export default SkillCard