import './header.css';
interface Props {
    user?: {
        name: string;
    };
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}
declare const Header: import("svelte").Component<Props, {}, "">;
type Header = ReturnType<typeof Header>;
export default Header;
//# sourceMappingURL=Header.svelte.d.ts.map