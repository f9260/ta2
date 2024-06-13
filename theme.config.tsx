import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import rehber from 'images/rehber.png'


const config: DocsThemeConfig = {
  logo: <Image src={rehber} alt=""/>,

  docsRepositoryBase: 'https://github.com/shuding/-docs-template',
  footer: {
    text: (
      <span>
         {new Date().getFullYear()} ©{' '}
        <a href="https://ve3.plus/tr" target="_blank">
          VE3.Plus
        </a>
        
      </span>
    )

  },
    toc: {
    title: "İçindekiler",
    // Diğer TOC bileşeni özellikleri...
  },
  
  editLink: {
    component: null,
    // Diğer TOC bileşeni özellikleri...
  },
  feedback: {
    content: "Bir sorun mu var? Bizimle paylaş",
    useLink: () =>  "https://forum.ve3.plus/t/q-a"
  // Diğer TOC bileşeni özellikleri...
  },

  search : {
    placeholder:"Rehber'de Ara"
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – VE3.Plus | Rehber'
    }
  },
  gitTimestamp: null,


  primaryHue: 170
}


export default config
