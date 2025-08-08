import { getLanguage } from "../../utils/utils";
import CodeHighlighter from "./CodeHighlighter";
import CodeOptions, {
  CSSTab,
} from "./CodeOptions";

const CodeExample = ({ codeObject }) => (
  <>
    {Object.entries(codeObject).map(([name, snippet]) => {
      const skip = [
        "tailwind",
        "css",
        "cliTsDefault",
      ];
      if (skip.includes(name)) return null;

      if (name === "code" || name === "tsCode") {
        return (
          <div key={name}>
            <h2 className="demo-title">JSX</h2>

            <CodeOptions>
              <CSSTab>
                <CodeHighlighter language="jsx" codeString={codeObject.code} />
                {codeObject.css && (
                  <>
                    <h2 className="demo-title">CSS</h2>
                    <CodeHighlighter language="css" codeString={codeObject.css} />
                  </>
                )}
              </CSSTab>
            </CodeOptions>
          </div>
        );
      }

      return (
        <div key={name}>
          <h2 className="demo-title">{name}</h2>
          <CodeHighlighter language={getLanguage(name)} codeString={snippet} />
        </div>
      );
    })}
  </>
);

export default CodeExample;
