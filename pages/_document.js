import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta
                    property="og:title"
                    content="Magic email writing assistant"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="input the title of the email and we will generate the email template"
                    key="description"
                />
                <meta
                    property="og:image"
                    content="https://pbs.twimg.com/profile_banners/1213875322505945088/1675252743/1500x500"
                />
                <meta name="twitter:card" content="summary_large_image"></meta>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
