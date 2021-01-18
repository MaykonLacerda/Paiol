import styled from 'styled-components'

export const Container = styled.div`

.topnav {
    float: right;
}

.topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.topnav a:hover {
    background-color: #ddd;
    color: black;
}

.topnav a.active {
    background-color: #29668f;
    color: white;
}

.topnav .icon {
    display: none;
}
`
