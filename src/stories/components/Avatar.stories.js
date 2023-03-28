import { Avatar } from "../../components";

export default {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        src: { defaultValue: 'https://picsum.photos/200/400' },
        shape: { 
            defaultValue: 'circle', 
            control: 'inline-radio', 
            options: ['circle', 'round', 'square']
        },
        size: { 
            defaultValue: 70, 
            control: { type: 'range', min: 40, max: 200 },
        },
        mode: {
            defaultValue: 'cover', 
            control: 'inline-radio',
            options: ['contain', 'cover', 'fill']
        }
    }
};

export const Default = (args) => {
    return (
        <Avatar {...args} />
    );
};

export const Group = () => {
    return (
        <Avatar.Group>
            <Avatar src="https://picsum.photos/200?1" />
            <Avatar src="https://picsum.photos/200?2" />
            <Avatar src="https://picsum.photos/200?3" />
            <Avatar src="https://picsum.photos/200?4" />
        </Avatar.Group>
    )
}