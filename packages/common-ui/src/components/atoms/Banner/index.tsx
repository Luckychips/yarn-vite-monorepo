interface ComponentProps {
    instanceName: string;
}

const Banner = ({ instanceName }: ComponentProps) => {
    return <h1>Welcome to the {instanceName} portal</h1>;
};

export default Banner;
