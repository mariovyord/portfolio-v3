import { TSkill } from "../../types/types"

const SkillCard: React.FC<{ skill: TSkill }> = ({ skill }) => {
    return (
        <div>
            {skill.skillName}
        </div>
    )
}

export default SkillCard