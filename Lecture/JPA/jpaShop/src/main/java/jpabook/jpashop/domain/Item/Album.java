package jpabook.jpashop.domain.Item;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@DiscriminatorValue("A") //DB값에 어떤 변수명으로 저장할지 결정(디폴트값은 클래스 이름)
public class Album extends Item{
    private String artist;
    private String etc;
}
