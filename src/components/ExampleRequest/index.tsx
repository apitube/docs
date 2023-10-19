import React, { useEffect, useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/palenight";

interface ExampleRequestProps {
    url: string;
}

export default function ExampleRequest(props: ExampleRequestProps): JSX.Element {
    const {url} = props;
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        // Replace this URL with the actual URL of your JSON data.
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setJsonData(data);
            });
    }, []);

    return (
        <div>
            {jsonData ? (
                <Highlight {...defaultProps} theme={theme} code={JSON.stringify(jsonData, null, 2)} language="json">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                      </pre>
                    )}
                </Highlight>
            ) : (
                <p>Loading JSON data...</p>
            )}
        </div>
    );
}
