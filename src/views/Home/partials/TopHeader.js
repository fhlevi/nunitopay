import SubHeader from './SubHeader';

function TopHeader() {
    return ( 
        <div className="home-header">
            <div className="top-header el-center">
                <div className="title-bar text-25 font-bold text-bg-white">
                    nunitoPay
                </div>
            </div>
            <div className="space-banner"></div>
            <SubHeader></SubHeader>
        </div>
     );
}

export default TopHeader;