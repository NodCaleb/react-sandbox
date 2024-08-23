import HomeIcon from './HomeIcon.jsx'

export default function Tabs({ children, buttons, Icon = null, ButtonsContainer = 'menu' }) {
    
    // const ButtonsContainer = buttonsContainer;
    
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
            {Icon ? <Icon /> : ''}
            
        </>
    );
}