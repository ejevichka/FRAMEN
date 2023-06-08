import styled from "styled-components";

interface ImagesProps {
    height?: string;
    width?: string;
    styles?: unknown;
}

export const Images = styled.img<ImagesProps>`
    height: ${props => (props.height ? props.height : "auto")};
    width: ${props => (props.width ? props.width : "auto")};
`;
