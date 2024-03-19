package jpabook.jpashop.domain;

import jakarta.persistence.Embeddable;

@Embeddable //다른 코드나 파일에 내장이 가능하다

public class Address {
    private String city;
    private String street;
    private String zipcode;
}
