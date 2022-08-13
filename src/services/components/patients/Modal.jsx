import styled from 'styled-components';

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 20px; */
`

const ContainerModal = styled.div`
    position: relative;
    background: #313131;
    border-radius: 10px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 10px;
`

const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 1s all ease-in-out;
    border-radius: 5px;
    color: #1766DC;

    &:hover {
        background: red;
    }
`



export const Modal = ({ children, isVisible, setVisibility }) => {
    return (
        <>
            {
                isVisible &&
                <Overlay>
                    <ContainerModal>
                        <CloseButton onClick={ () => setVisibility(false) }>
                            <i className="bi bi-x-circle fs-4"></i>
                        </CloseButton>
                        {children}
                    </ContainerModal>
                </Overlay>
            }
        </>
    )
}

