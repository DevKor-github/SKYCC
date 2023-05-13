import MainHead from "../components/MainHead";
import MainTemplate from "../components/MainTemplate";

interface Props {
    children?: React.ReactNode;
}
export const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <MainTemplate>
                <MainHead></MainHead>
                {children}
            </MainTemplate>
        </>
    );
};
