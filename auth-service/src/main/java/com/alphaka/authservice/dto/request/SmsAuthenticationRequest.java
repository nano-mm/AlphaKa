package com.alphaka.authservice.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SmsAuthenticationRequest {

    @Pattern(regexp = "^\\d{10,11}$", message = "전화번호는 10~11자리 숫자만 입력 가능합니다.")
    @NotBlank(message = "전화번호는 필수 입력값입니다.")
    @Schema(description = "사용자의 전화번호", example = "01012345678")
    private String phoneNumber;

}