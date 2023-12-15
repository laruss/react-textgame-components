export const defaultProps = {
    whileInView: { opacity: 1, y: 0, x: 0 },
    transition: { delay: 0.3, type: 'spring', duration: 2 },
    viewport: { once: true },
};

export const effects = {
    rightSpring: { opacity: 0, x: 100 },
    leftSpring: { opacity: 0, x: -100 },
    bottomSpring: { opacity: 0, y: 100 },
    opacity: { opacity: 0 },
};
