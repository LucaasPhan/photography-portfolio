const Anchor = ({href, text, isLanding: isLanding = false, toggle: toggle = false}: {href: string; text: string, isLanding?: boolean, toggle?: boolean}) => {
    return (
        <a href={href} className={`block p-3 max-xl:pr-6 ${isLanding && !toggle ? "text-gray-400 hover:text-gray-100" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"} transition-colors`}>{text}</a>
    );
};

export default Anchor;