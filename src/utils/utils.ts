export function getAge() {
    const birthday = new Date("2008-09-27");
    const age = new Date(Date.now() - birthday.getTime()).getFullYear() - 1970;

    return age.toString();
}

export let lang: string = "ru";

export interface Translation {
    code: string;
    ruText: string;
    engText: string;
}

export const translations: Translation[] = [
    {
        code: "name",
        ruText: "Сергей Фомчуков",
        engText: "Sergey Fomchukov"
    },
    {
        code: "about",
        ruText: "Меня зовут Сергей, мне {age} лет. \n" +
            "Мой первый язык программирования был Python. Сейчас, я пишу на Java и занимаюсь Web разработкой.",
        engText: "My name is Sergey, i`m {age} years. \n" +
            "My first programming language was Python. Now, I`m write in Java and do Web projects."
    },
    {
        code: "projects",
        ruText: "Проекты",
        engText: "Projects"
    },
    {
        code: "project.old_site",
        ruText: "Старый сайт",
        engText: "Old site"
    },
    {
        code: "project.old_site.desc",
        ruText: "Перейти на старую версию сайта",
        engText: "Go to old version of site."
    },
    {
        code: "project.raya_new",
        ruText: "Райя-Прайм V2",
        engText: "Raya-Prime V2"
    },
    {
        code: "project.raya_new.desc",
        ruText: "Discord бот с огромным функционалом. Сделана, в честь сезона Лололошки.",
        engText: "Discord bot with a lot of functions. Created according to MrLololoshka season."
    },
    {
        code: "go",
        ruText: "Перейти",
        engText: "Go"
    },
    {
        code: "tools",
        ruText: "Инструменты",
        engText: "Tools"
    },
    {
        code: "friend.tapnisu",
        ruText: "Tapnisu (Алексей Рыбин)",
        engText: "Tapnisu (Alexiy Rybin)"
    },
    {
        code: "friend.tapnisu.comment",
        ruText: "Лучший из всех, с кем я знаком :3",
        engText: "The best person, that I`ve ever met :3"
    },
    {
        code: "friend.metla",
        ruText: "Метла",
        engText: "Metla"
    },
    {
        code: "friend.metla.comment",
        ruText: "Мой второй друг :3",
        engText: "My second friend :3"
    },
    {
        code: "friends",
        ruText: "Друзья",
        engText: "Friends"
    },
    {
        code: "friend.nekrispes",
        ruText: "НеКриспес (Уточка)",
        engText: "NeKrispes_ (Duck)"
    },
    {
        code: "friend.nekrispes.comment",
        ruText: "Мой третий друг :3",
        engText: "My third friend :3"
    },
    {
        code: "friend.akirakitsune",
        ruText: "Акира",
        engText: "Akirakitsune"
    },
    {
        code: "friend.akirakitsune.comment",
        ruText: "Моя четвертая подруга :3",
        engText: "My fourth friend :3"
    },
    {
        code: "friend.miya",
        ruText: "Мия",
        engText: "MIYA"
    },
    {
        code: "friend.miya.comment",
        ruText: "Моя пятая подруга :3",
        engText: "My fifth friend :3"
    },
    {
        code: "friend.frenya",
        ruText: "Френя",
        engText: "Frenya"
    },
    {
        code: "friend.frenya.comment",
        ruText: "Моя шестая подруга :3",
        engText: "My sixth friend :3"
    },
    {
        code: "friend.dax",
        ruText: "Дакс",
        engText: "DAX"
    },
    {
        code: "friend.dax.comment",
        ruText: "Моя седьмой друг :3",
        engText: "My seventh friend :3"
    },
    {
        code: "project.my_site",
        ruText: "Мой сайт V2",
        engText: "My site V2"
    },
    {
        code: "project.my_site.desc",
        ruText: "Мой новый сайт. Вы сейчас здесь.",
        engText: "My new site. Now you are here."
    },
    {
        code: "project.seregapomogi",
        ruText: "Серегапомоги!!!",
        engText: "Seregapomogi!!!"
    },
    {
        code: "project.seregapomogi.desc",
        ruText: "Сайт с некоторыми урока от Сереги.",
        engText: "Site with some Serega`s lessons."
    },
    {
        code: "contacts",
        ruText: "Контакты",
        engText: "Contacts"
    },
    {
        code: "source",
        ruText: "Исходный код",
        engText: "Source code"
    },
]

export function getTranslation(code: string) {
    let text: string = "Перевод не найден.";
    translations.map((translation: Translation) => {
        if (lang === "ru" && translation.code === code) {
            text = translation.ruText.toString();
        }
        if (lang === "eng" && translation.code === code) {
            text = translation.engText.toString();
        }
    })
    return text;
}