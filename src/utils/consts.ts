import { getTranslation } from "./utils.ts";

export interface Project {
    name: string,
    description: string,
    img?: string,
    href?: string
}

export interface Friend {
    name: string,
    comment: string,
    isBest?: boolean,
    href?: string,
    image?: string
}

export const friends: Friend[] = [
    {
        name: getTranslation("friend.tapnisu"),
        comment: getTranslation("friend.tapnisu.comment"),
        isBest: true,
        href: "https://tapni.su/",
        image: "https://avatars.githubusercontent.com/u/57483029"
    },
    {
        name: getTranslation("friend.metla"),
        comment: getTranslation("friend.metla.comment"),
        href: "https://metla-blend.ru/",
        image: "https://askiphy.ru/team/metla.png"
    },
    {
        name: getTranslation("friend.nekrispes"),
        comment: getTranslation("friend.nekrispes.comment"),
        href: "https://t.me/nekrispes228",
        image: "./friends/nekrispes.jpg",
        isBest: true
    },
    {
        name: getTranslation("friend.akirakitsune"),
        comment: getTranslation("friend.akirakitsune.comment"),
        href: "https://t.me/akirakitsunechannel",
        image: "https://askiphy.ru/friend/akira.jpg",
        isBest: true
    },
    {
        name: getTranslation("friend.miya"),
        comment: getTranslation("friend.miya.comment"),
        href: "https://t.me/miya_mito",
        image: "https://askiphy.ru/friend/miya.jpg",
        isBest: true
    },
    {
        name: getTranslation("friend.frenya"),
        comment: getTranslation("friend.frenya.comment"),
        href: "https://t.me/frenchic993",
        image: "https://askiphy.ru/friend/frenya.jpg",
    },
    {
        name: getTranslation("friend.dax"),
        comment: getTranslation("friend.dax.comment"),
        href: "https://t.me/tutdax",
        image: "https://askiphy.ru/friend/dax.jpg",
    }
]

export const projects: Project[] = [
    {
        name: getTranslation("project.old_site"),
        description: getTranslation("project.old_site.desc"),
        img: "https://old.askiphy.ru/assets/MySite.png",
        href: "https://old.askiphy.ru"
    },
    {
        name: getTranslation("project.raya_new"),
        description: getTranslation("project.raya_new.desc"),
        img: "https://askiphy.ru/projects/rayaV2.jpg",
        href: "https://askiphy.ru/raya"
    },
    {
        name: getTranslation("project.my_site"),
        description: getTranslation("project.my_site.desc"),
        img: "./projects/mysite.jpg",
        href: "/"
    },
    {
        name: getTranslation("project.seregapomogi"),
        description: getTranslation("project.seregapomogi.desc"),
        img: "https://askiphy.ru/projects/seregapomogi.jpg",
        href: "https://study.askiphy.ru"
    }
]