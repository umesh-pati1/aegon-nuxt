export const getBodyContent = ({
    path,
    secondApiParam,
    fields,
    vid
}: { path: string, secondApiParam?: [], fields?: string, vid?: string }) => {
    let data: any = [];
    vid = vid ? `&resourceVersion=id:${vid}` : "";
    data = [
        {
            requestId: "router",
            uri: `/jsonapi/node?path=${path}&_format=json`,
            action: "view",
            headers: {
                Accept: "application/json",
            },
        },
        {
            requestId: "resolvedResource",
            waitFor: ["router"],
            uri:
                `{{router.body@$.jsonapi.individual}}?jsonapi_include=1${vid}`,
            action: "view",
            headers: {
                Accept: "application/json",
            },
        },
    ];

    secondApiParam?.forEach((param, index) => {
        let obj;
        if (Array?.isArray(param)) {
            obj = {
                requestId: "req-" + index,
                action: "view",
                uri: `/jsonapi/node/${param?.[0]}?jsonapi_include=1${param?.[1]}`,
                headers: {
                    Accept: "application/json",
                },
            };
        } else {
            obj = {
                requestId: "req-" + index,
                action: "view",
                uri: `/jsonapi/node/${param}?jsonapi_include=1`,
                headers: {
                    Accept: "application/json",
                },
            };
        }

        data?.push(obj);
    });
    return encodeURIComponent(JSON?.stringify(data));
};