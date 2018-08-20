const getInitialDirection = INITIAL_POS => {
    return INITIAL_POS.charAt(INITIAL_POS.length - 1)
};

module.exports = { getInitialDirection };
