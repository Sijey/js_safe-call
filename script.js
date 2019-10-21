function safeCall(f) {
    try {
        f();
    } catch (err) {
        return false;
    }

    return true;
}
