export function useMgnlImage(image) {
    if (!image || !image['@link']) return "";
    const runtimeConfig = useRuntimeConfig();
    return runtimeConfig.public.MGNL_HOST + image['@link'];
}