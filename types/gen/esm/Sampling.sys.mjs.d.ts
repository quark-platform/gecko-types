declare module "resource://gre/modules/components-utils/Sampling.sys.mjs" {
    var Sampling: {
        fractionToKey(frac);
        bufferToHex(buffer);
        isHashInBucket(inputHash, minBucket, maxBucket, bucketCount);
        truncatedHash(data);
        stableSample(input, rate);
        bucketSample(input, start, count, total);
        ratioSample(input, ratios);
    };
}