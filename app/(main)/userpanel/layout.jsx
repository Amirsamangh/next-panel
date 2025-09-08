import CoursesSlot from "@/components/userPanel/CoursesSlot";
import WalletSlot from "@/components/userPanel/WalletSlot";
import CommentsSlot from "@/components/userPanel/CommentsSlot";

const UserPanelLayout = ({ children }) => {
    return (
        <div className='h-full w-full p-10'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
                <div className="user_panel_cards">
                    <WalletSlot />
                </div>
                <div className="user_panel_cards">
                    <CommentsSlot />
                </div>
                <div className="user_panel_cards lg:col-span-2">
                    <CoursesSlot/>
                </div>
            </div>
            {children}
        </div>
    );
};

export default UserPanelLayout;