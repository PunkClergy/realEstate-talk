import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const MarkDownRender = ({ msg, role = '' }) => {
    const CustomLinkRenderer = ({ href, children, ...props }) => (
        <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
            {children}
        </a>
    );
    return (
        <div className={`markdown-body bg-transparent ${role === "You" && "text-[#07C160]"}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    a: CustomLinkRenderer,
                }}>
                {msg}
            </ReactMarkdown>
        </div>
    );
};
export default MarkDownRender;