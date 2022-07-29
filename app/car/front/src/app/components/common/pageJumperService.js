/**
 * pageService
 */
module.exports = function () {
    let service = {};
    const setPagerRange = (currentPageNumber, totalPageCount, pagerSize) => {
        let retval = {};
        if (totalPageCount <= pagerSize) {
            retval.startPagerNumber = 1;
            retval.endPagerNumber = totalPageCount;
        } else {
            if (currentPageNumber <= 6) {
                retval.startPagerNumber = 1;
                retval.endPagerNumber = 10;
            } else if (currentPageNumber + 4 >= totalPageCount) {
                retval.startPagerNumber = totalPageCount - 9;
                retval.endPagerNumber = totalPageCount;
            } else {
                retval.startPagerNumber = currentPageNumber - 5;
                retval.endPagerNumber = currentPageNumber + 4;
            }
        }
        return retval;
    };
    /**
     *
     * @param {*} totalItemCount  총 item 갯수
     * @param {*} pageSize  : 한페이지당 리스트되는 item갯수
     * @param {*} currentPageNumber : 현재페이지 1부터 시작
     * @param {*} pagerSize  : 페이지버튼 갯수
     * @returns
     */
    service.getJumper = (totalItemCount, pageSize, currentPageNumber, pagerSize) => {
        let totalPageCount = Math.ceil(totalItemCount / pageSize); // 총페이지갯수
        let { startPagerNumber, endPagerNumber } = setPagerRange(currentPageNumber, totalPageCount, pagerSize);
        let pages = [];
        for (let i = startPagerNumber; i <= endPagerNumber; i++) {
            pages.push(i);
        }
        let startIndex = (currentPageNumber - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItemCount - 1);
        return {
            totalItemCount: totalItemCount,
            pageSize: pageSize,
            totalPageCount: totalPageCount,
            currentPageNumber: currentPageNumber,
            startPagerNumber: startPagerNumber,
            endPagerNumber: endPagerNumber,
            pages: pages,
            startIndex: startIndex,
            endIndex: endIndex
        };
    };
    return service;
};
