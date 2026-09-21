package com.vernu.sms.helpers

import org.json.JSONObject
import retrofit2.Response

/**
 * Extracts the human-readable `message` field the API returns in error bodies
 * (e.g. the device-limit 429), falling back to null when it can't be parsed.
 */
fun Response<*>.serverErrorMessage(): String? {
    val raw = errorBody()?.string()?.takeIf { it.isNotBlank() } ?: return null
    return try {
        val body = JSONObject(raw)
        body.optString("message").takeIf { it.isNotBlank() }
            ?: body.optString("error").takeIf { it.isNotBlank() }
    } catch (e: Exception) {
        null
    }
}
