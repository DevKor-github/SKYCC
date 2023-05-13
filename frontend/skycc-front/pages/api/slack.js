import { WebClient, LogLevel } from "@slack/web-api";

export default function handler(req, res) {
    const token = process.env.NEXT_PUBLIC_SLACK_TOKEN;
    const myName = "엄마";
    const detail = "서울-부산 KTX";

    const client = new WebClient(token, {
        // LogLevel can be imported and used to make debugging simpler
        logLevel: LogLevel.DEBUG,
    });

    (async () => {
        // Post a message to the channel, and await the result.
        // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
        const directMessageID = await client.conversations.open({
            users: "U0565FZ8X9D",
        });

        const result = await client.chat.postMessage({
            text: `${myName}님께서 ${detail}의 예약을 요청하셨습니다. \n
        결제 URL : https://kucodemaster.github.io/SKYCC_Hackaton_mock_pay/`,
            channel: directMessageID.channel.id,
        });
    })();
    res.send(200);
    console.log("되나");
}
