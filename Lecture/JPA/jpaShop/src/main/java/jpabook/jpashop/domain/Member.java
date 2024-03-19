package jpabook.jpashop.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {
    @Id @GeneratedValue //sequence 값 사용 (?)
    @Column(name = "member_id") //DB에서 DDL에 매핑해줌
    private Long id; //회원 구분을 위한 id
    private String name; //회원 이름

    @Embedded
    private Address address; //회원의 집 주소
    @OneToMany//하나의 고객이 여러개의 상품을 주문
            (mappedBy = "member")//member값이 변경된다고 해서 FK값이 변경되지는 않는다
    private List<Order> orders = new ArrayList<>();
}
