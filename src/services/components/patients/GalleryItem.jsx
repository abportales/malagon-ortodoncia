import styled from 'styled-components';
import { useState } from 'react';
import { Modal } from './Modal';
import { useFetchImg } from '../../hooks/useFetchImg';

const Content = styled.div`
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`

const Button = styled.button`
  display:block;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px 30px;
  border-radius: 100px ;
  color: #fff;
  border: none;
  background: #1766DC;
  cursor: pointer;
  font-family: 'Roboto', sans-serif ;
  font-weight: 500 ;
  transition: 0.5s ease all ;

  &:hover {
    background: red;
  }
`

export const GalleryItem = ({
    path,
    storagePath,
    info,
    width,
    height,
}) => {

    const [modalVisibility, setModalVisibility] = useState(false)

    const {url} = useFetchImg(storagePath);

    return (
        <>
            <img
                onClick={() => setModalVisibility(!modalVisibility)}
                className='img-thumbnail miniImg'
                style={{ width: width, height: height }}
                src={url}
                alt={info}
            />
            <div>
                <Modal
                    isVisible={modalVisibility}
                    setVisibility={setModalVisibility}

                >
                    <Content>
                        <img
                            className='img-fluid'
                            src={url}
                            alt={info}
                            style={{ maxHeight: "690px", maxWidth: "1100px" }}
                        />
                        <Button onClick={() => setModalVisibility(false)}> CERRAR </Button>
                    </Content>
                </Modal>
            </div>

        </>
    )
}
