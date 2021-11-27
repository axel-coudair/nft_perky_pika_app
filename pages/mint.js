import React from 'react'
import MintArea from '../components/MintArea';
import HeaderMint from '../components/HeaderPages';
import MintImage from '../components/MintImage';

export default function mint() {
    return (
        <>
            <HeaderMint image={"/title_images/title_image_mint.png"}/>
            <MintImage/>
            <MintArea />
        </>
    )
}
