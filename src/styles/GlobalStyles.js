import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{

    &, &.dark-mode{
        /* --color-bg:#0A1931; */
        --color-bg:10, 25, 49;
        --color-text-primary:#D4E1F2;
        --color-text-h:#185ADB;
        --color-btn-primary:#185ADB;
        --color-hover:#4682B4;
        --color-link:#D4E1F2;

        --color-footer:#071222;

        --pic-opacity:0.95;
    }

     &.light-mode{
        /* --color-bg:#F0F8FF; */
        --color-bg:240, 248, 255;
        --color-text-primary:#333333;
        --color-text-h:#185ADB;
        --color-btn-primary:#185ADB;
        --color-hover:#4682B4;
        --color-link:#a3bdf1
        ;

        --color-footer:#a3bdf1;

        
        --pic-opacity:0.95;
    }
}`;

export default GlobalStyles;
